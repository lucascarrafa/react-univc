# react-univc
Disciplina de desenvolvimento mobile

## Preparando o ambiente (Windows 10)
Abra o PowerShell no modo administrador:
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Instalando o node.js e Java JDK
No PowerShell executaro o seguinte comando:
```
choco install -y nodejs-lts openjdk11
```

## Download e instalação do Andorid Studio
Faça o download nesse link: [Andorid Studio](https://developer.android.com/studio)
Durante a instalação marque a opção "Android Virtual Device"
