# bobril.github.io
Webpage for Bobril - [bobril.com](bobril.com)

# Documentation
Documentation itself is located in **./doc** directory.

## Structure
* **Introduction** 
    * Motivation to create new framework
    * Basic (non-technical) information
* **Guides**
    * Tutorials (step by step)
    * Introducing the technologies, that co-work with Bobril like Bobflux, Bobx etc.
* **Docs**
    * The most technical part of bobril.com
    * Describes the core of Bobril
    * Describes lifecycle/creation of component
* **Community**
    * There is a place for community examples
    * If you are not able to decided, where you should place your article, this can be correct place
    
## Templates
For a consistent look of documentation and ensure higher quality, please observe templates written below.
### Docs chapter

< In a few sentences describe the purpose of the method >

< Fragment of highlighted code - ```use code annotation``` -, where the method is presented >

< Warnings, tips, etc. >


## How to contribute
We really appraise, if you contribute to the documentation. You can contribute through a pull request.

If you consider something as important and it is not described enough here, don't hesitate to fix it or report an issue. 

### Contribution to existing pages
1. Create a fork of the repository 
1. Edit *.md files
1. Create the a request 

### Create a new page
1. Create a *.md file in the chapter/section you want to contribute to
1. Insert the data below to the top of the file and edit attributes: menuLabel, menuAnchor, previous, next.
``` 
    [//]: <> (!!! ORDER OF ROWS IS REQUIRED !!!)
    [//]: <> (menuLabel:'Basics')
    [//]: <> (menuAnchor:'menu-basics')
    [//]: <> (previous:'root.md';next: 'bobrilComponent.md')
    <h2 id='menu-basics'>Basics</h2>
```
1. The attributes ensure the correct configuration of documentation
1. Please be very careful! Documentation's generator is under the hard development and some edge cases 
doesn't have to be handled. The mistakes in this key part of the file (metadata) can cause unexpected behaviour of compilation.


### Build the page locally
1. If you haven't created the fork of the repository, please do it now.
1. In root directory run commands: 
    1. ```git submodule update --recursive --remote```
    1. ```npm run build```
1. Open generated index.html in the root directory
