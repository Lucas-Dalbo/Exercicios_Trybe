from subprocess import check_output


# Informações Gerais
output = check_output("lscpu", shell=True)
output = output.decode("UTF-8").splitlines()

output_dict = {}

for info in output:
  index = info.index(':')
  key = info[:index]
  value = info[index + 1:].strip()
  output_dict[key] = value


# Memoria RAM
ram_info = check_output("free", shell=True)
ram_info = ram_info.decode("UTF-8").splitlines()[:2]

ram_keys = ram_info[:1][0].split()
ram_values = ram_info[1:][0].split()[1:]

ram_dict = {}

for index in range(0, len(ram_keys)):
  ram_dict[ram_keys[index]] = int(ram_values[index])


print("Nome do modelo", output_dict["Nome do modelo"], sep=": ")
print("Modelo", output_dict["Modelo"], sep=": ")
print("Modo(s) operacional da CPU", output_dict["Modo(s) operacional da CPU"], sep=": ")
print("CPU MHz", output_dict["CPU MHz"], sep=": ")
print("cache de L1d", output_dict["cache de L1d"], sep=": ")
print("cache de L1i", output_dict["cache de L1i"], sep=": ")
print("cache de L2", output_dict["cache de L2"], sep=": ")
print("cache de L3", output_dict["cache de L3"], sep=": ")
print(f"RAM total: {ram_dict['total'] // 1000 } Mb")
print(f"RAM em uso: {ram_dict['usada'] // 1000 } Mb")