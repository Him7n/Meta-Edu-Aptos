module publisher::BasicCoins {

    use std::signer;
    use std::debug; // For printing/logging purposes if supported by your UI

    struct Coins has store { val: u64 }

    struct Balance has key {
        coins: Coins
    }

    /// Error codes
    const ERR_BALANCE_NOT_EXISTS: u64 = 101;
    const EINSUFFICIENT_BALANCE: u64 = 1;

    /// Mint `amount` tokens to the caller's account.
    public entry fun mint(account: &signer, val: u64) acquires Balance {
        let account_addr = signer::address_of(account);
        let new_coins = Coins { val };
        create_balance_if_not_exists(account);
        deposit(account_addr, new_coins);
    }

    /// Burn `amount` tokens from the caller's account.
    public entry fun burn(account: &signer, val: u64) acquires Balance {
        let account_addr = signer::address_of(account);
        let coins_to_burn = withdraw(account_addr, val);
        // Destroy the coins (Move will drop `coins_to_burn` here)
        let Coins { val: _ } = coins_to_burn;
    }

    /// Transfer `amount` tokens from the caller's account to `to`.
    public entry fun transfer(from: &signer, to: address, amount: u64) acquires Balance {
        let from_addr = signer::address_of(from);
        let coins_to_transfer = withdraw(from_addr, amount);
        deposit(to, coins_to_transfer);
    }

    /// Create a balance for the caller if it doesn't exist.
    public entry fun create_balance_if_not_exists(account: &signer) {
        let acc_addr = signer::address_of(account);
        if (!balance_exists(acc_addr)) {
            let zero_coins = Coins { val: 0 };
            move_to(account, Balance { coins: zero_coins });
        }
    }

    /// Check if a balance exists for the given address.
    public fun balance_exists(acc_addr: address): bool {
        exists<Balance>(acc_addr)
    }

    /// Get the balance of the given address.
    public fun balance(owner: address): u64 acquires Balance {
        borrow_global<Balance>(owner).coins.val
    }

    /// Deposit coins into the balance of the given address.
    public fun deposit(acc_addr: address, coins: Coins) acquires Balance {
        assert!(balance_exists(acc_addr), ERR_BALANCE_NOT_EXISTS);
        let balance_ref = &mut borrow_global_mut<Balance>(acc_addr).coins.val;
        let Coins { val } = coins;
        *balance_ref = *balance_ref + val;
    }

    /// Withdraw coins from the balance of the given address.
    public fun withdraw(acc_addr: address, value: u64): Coins acquires Balance {
        assert!(balance_exists(acc_addr), ERR_BALANCE_NOT_EXISTS);
        let balance_ref = &mut borrow_global_mut<Balance>(acc_addr).coins.val;
        assert!(*balance_ref >= value, EINSUFFICIENT_BALANCE);
        *balance_ref = *balance_ref - value;
        Coins { val: value }
    }

    /// Entry function to check balance and log it in the UI.
    public entry fun check_balance(account: &signer) acquires Balance {
        let account_addr = signer::address_of(account);
        let current_balance = balance(account_addr);
        debug::print(&current_balance);  // Use `debug::print` to output the balance if supported
    }
}
