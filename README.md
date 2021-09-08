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

# ng --version


![Angular version](https://miro.medium.com/max/474/1*cRQJaiT9rddJquEdxv0yCw.png)



# create first project:
Go to folder where you want create your first project then in terminal put:

ng new hello-world

Now you can run your project:
Go to folder of project:
cd hello-world

then use:
ng serve


# creating module:
ng g m module_name

# creating component:
ng g c module_name/component_name --module=module_name

# creating service:

ng g s module_name/service_name


# install external lib:
npm install --save bootstrap@3