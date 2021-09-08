# angular-12
This project I will learn about angular 12 and create some projects. Practice is the best way to learn and put our knowledge  in action


# To create project in angular you can need these configuration:

* nodejs version 12 (minimum)
* npm 
* angular cli


# how install in terminal?

# nodejs: 
* sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
* curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
* sudo apt -y install nodejs

check version in terminal:
/home$ node --version
v12.22.6
/home$ npm --version
6.14.15


# angular cli:
* sudo npm install -g @angular/cli

if you put -g (global) you need permissions "sudo"

check version in terminal:

   _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.2.4
Node: 12.22.6
Package Manager: npm 6.14.15
OS: linux x64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1202.4 (cli-only)
@angular-devkit/core         12.2.4 (cli-only)
@angular-devkit/schematics   12.2.4 (cli-only)
@schematics/angular          12.2.4 (cli-only)


# create first project:
Go to folder where you want create your first project then in terminal put:

ng new hello-world

Now you can run your project:
Go to folder of project:
cd hello-world

then use:
ng serve