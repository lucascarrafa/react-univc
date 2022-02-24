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

## Configurar a variável de ambiente ANDROID_HOME
### 1. Etapa
* Abra o painel de controle do Windows.
* Clique em **Contas de Usuários**, depois clique novamente em **Contas de Usuários**
* Clique em **Alterar variáveis do meu ambiente**
* Clique em **Novo** (variáveis do sistema)... preenchar de acordo com a imagem abaixo, modificado o nome de usuário pelo seu

![image](https://user-images.githubusercontent.com/29130325/155434553-4f912a49-fb9b-459b-b561-50497b16873b.png)

OU

```
%USERPROFILE%\AppData\Local\Android\Sdk
```

### 2. Etapa
* Abra o painel de controle do Windows.
* Clique em **Contas de Usuários**, depois clique novamente em **Contas de Usuários**
* Clique em **Alterar variáveis do meu ambiente**
* Selecione a variável **Path**
* Clique em **Editar**
* Clique em **Novo** e adicione:

```
%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools
```

## Testando o ambiente
Execute o comando:
```
npx react-native init AwesomeProject
```
