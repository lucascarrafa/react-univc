# react-univc
Disciplina de desenvolvimento mobile

## Preparando o ambiente (Windows 10)
Abra o PowerShell no modo administrador para instalar o [Chocolatey](https://chocolatey.org):
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Instalando o node.js
No PowerShell executar o comando:
```
choco install -y nodejs-lts
```

## Instalando o Expo
Execute o comando:
```
npm install -g expo-cli
```
