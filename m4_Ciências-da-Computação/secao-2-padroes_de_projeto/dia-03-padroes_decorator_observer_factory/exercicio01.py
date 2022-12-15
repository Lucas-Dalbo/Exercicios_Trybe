class Log:
    def dispara_log(self, message):
        return message


class LogError:
    def __init__(self, log: Log):
        self.log = log

    def decorate_log(self, message):
        VERMELHO = "\033[91m"
        RESET = "\033[0m"
        return (f"{VERMELHO}ERRO: {self.log.dispara_log(message)}{RESET}")


class LogWarning:
    def __init__(self, log: Log):
        self.log = log

    def decorate_log(self, message):
        LARANJA = "\033[93m"
        RESET = "\033[0m"
        return (f"{LARANJA}AVISO: {self.log.dispara_log(message)}{RESET}")


class LogSuccess:
    def __init__(self, log: Log):
        self.log = log

    def decorate_log(self, message):
        VERDE = "\033[92m"
        RESET = "\033[0m"
        return (f"{VERDE}SUCESSO: {self.log.dispara_log(message)}{RESET}")


if __name__ == "__main__":
    logger = Log()
    print (LogSuccess(logger).decorate_log("log verde"))
    print (LogWarning(logger).decorate_log("log amarelo"))
    print (LogError(logger).decorate_log("log vermelho"))