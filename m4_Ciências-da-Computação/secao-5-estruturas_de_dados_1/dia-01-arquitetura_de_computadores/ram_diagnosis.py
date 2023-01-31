from subprocess import check_output
from time import sleep


def ram_report():
    ram_info = check_output("free", shell=True)
    ram_info = ram_info.decode("UTF-8").splitlines()[:2]

    ram_keys = ram_info[:1][0].split()
    ram_values = ram_info[1:][0].split()[1:]

    ram_dict = {}

    for index in range(0, len(ram_keys)):
      ram_dict[ram_keys[index]] = int(ram_values[index])

    print(f"RAM total: {ram_dict['total'] // 1000 } Mb")
    print(f"RAM em uso: {ram_dict['usada'] // 1000 } Mb")


def report_by_second():
    ram_report()
    sleep(1)
    print("")
    report_by_second()


if __name__ == "__main__":
    report_by_second()
