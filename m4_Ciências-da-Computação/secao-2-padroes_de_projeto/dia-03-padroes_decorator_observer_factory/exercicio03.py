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

if __name__ == "__main__":
    suport = ContaSuporte()
    suporte_vendas = ContaSuporteVendas()
    gerente = ContaGerente()

    print("Conta suporte tem acesso ao sistema de Suporte: ", SuporteSystem(suport).check_account_permission())
    print("Conta suporte/vendas tem acesso ao sistema de Suporte: ", SuporteSystem(suporte_vendas).check_account_permission())
    print("Conta gerente tem acesso ao sistema de Suporte: ", SuporteSystem(gerente).check_account_permission())
    print("")
    print("Conta suporte tem acesso ao sistema de Vendas: ", VendasSystem(suport).check_account_permission())
    print("Conta suporte/vendas tem acesso ao sistema de Vendas: ", VendasSystem(suporte_vendas).check_account_permission())
    print("Conta gerente tem acesso ao sistema de Vendas: ", VendasSystem(gerente).check_account_permission())
    print("")
    print("Conta suporte tem acesso ao sistema de Financeiro: ", FinanceiroSystem(suport).check_account_permission())
    print("Conta suporte/vendas tem acesso ao sistema de Financeiro: ", FinanceiroSystem(suporte_vendas).check_account_permission())
    print("Conta gerente tem acesso ao sistema de Financeiro: ", FinanceiroSystem(gerente).check_account_permission())
