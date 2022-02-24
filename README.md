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
choco install -y nodejs-lts
```

## Instalando o Expo
Execute o comando:
```
npm install -g expo-cli
```

### Inicie a aplicação teste
```
expo init AwesomeProject

cd AwesomeProject
npm start
```
