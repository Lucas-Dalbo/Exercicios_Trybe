from abc import ABC, abstractmethod


class Conta(ABC):
    @abstractmethod
    def get_account_type(self):
        pass


class ContaSuporte(Conta):
    def __init__(self):
        self.account_type = ["suporte"]
    
    def get_account_type(self):
        return self.account_type


class ContaSuporteVendas(Conta):
    def __init__(self):
        self.account_type = ["suporte", "vendas"]
    
    def get_account_type(self):
        return self.account_type


class ContaGerente(Conta):
    def __init__(self):
        self.account_type = ["gerente"]
    
    def get_account_type(self):
        return self.account_type


class System(ABC):
    def __init__(self, conta: Conta, valid_accounts):
        self.valid_accounts = valid_accounts
        self.conta = conta

    def check_account_permission(self):
        for type in self.conta.get_account_type():
            if type in self.valid_accounts:
                return True
        return False


class SuporteSystem(System):
    def __init__(self, conta):
        valid_accounts = ["suporte", "gerente"]
        super().__init__(conta, valid_accounts)


class VendasSystem(System):
    def __init__(self, conta):
        valid_accounts = ["vendas", "gerente"]
        super().__init__(conta, valid_accounts)


class FinanceiroSystem(System):
    def __init__(self, conta):
        valid_accounts = ["gerente"]
        super().__init__(conta, valid_accounts)


suport = ContaSuporte()
suporte_vendas = ContaSuporteVendas()
gerente = ContaGerente()

print(SuporteSystem(suport).check_account_permission())
print(SuporteSystem(suporte_vendas).check_account_permission())
print(SuporteSystem(gerente).check_account_permission())
print("")
print(VendasSystem(suport).check_account_permission())
print(VendasSystem(suporte_vendas).check_account_permission())
print(VendasSystem(gerente).check_account_permission())
print("")
print(FinanceiroSystem(suport).check_account_permission())
print(FinanceiroSystem(suporte_vendas).check_account_permission())
print(FinanceiroSystem(gerente).check_account_permission())
