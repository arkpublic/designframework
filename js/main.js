var app = new Vue({
    el: '#website-app',
    methods: {
        generateIdLink: function(name){
            return '#' + name;
        }
    },
    data: {
        listOfItems: [
            //GRID Layout
            {
             
                id: 'grid',
                name: 'Grid',
                submenu: [
                    {
                        id: 'container',
                        name: 'Container',
                        container:{
                            class: "chn-container",
                            description: "Un contenedor es la seccion donde va alojado un bloque de elementos",
                            code: "<div class='chn-container'></div>",
                            display: "<div class='chn-container bg-gray border-black'>Estoy dentro de un contenedor</div>"
                        }
                    },
                    {
                        id: 'row',
                        name: 'Rows',
                        container:{
                            class: "chn-container",
                            description: "Una row marca la pauta de una fila de elementos",
                            code: "<div class='chn-container'>"
                                + "<div class='chn-row'>Estoy dentro de un row</div>"
                                + "</div>",
                            display: "<div class='chn-container bg-gray'>Estoy dentro de un row</div>"
                        }
                    },
                    {
                        id: 'columns',
                        name: 'Columns',
                        container:{
                            class: "chn-col-12",
                            description: "Una columna es la division de una fila",
                            code: "<div class='chn-container'>"
                                + "<div class='chn-row'><div class='chn-col-12'>Estoy dentro de una columna de tamanio 12</div></div>"
                                + "<div class='chn-row'><div class='chn-col-11'>Estoy dentro de una columna de tamanio 11</div></div>"
                                + "<div class='chn-row'><div class='chn-col-10'>Estoy dentro de una columna de tamanio 10</div></div>"
                                + "<div class='chn-row'><div class='chn-col-9'>Estoy dentro de una columna de tamanio 9</div></div>"
                                + "<div class='chn-row'><div class='chn-col-8'>Estoy dentro de una columna de tamanio 8</div></div>"
                                + "<div class='chn-row'><div class='chn-col-7'>Estoy dentro de una columna de tamanio 7</div></div>"
                                + "<div class='chn-row'>"
                                    + "<div class='chn-col-6'>Estoy dentro de una columna de tamanio 6</div>"
                                    + "<div class='chn-col-6'>Estoy dentro de una columna de tamanio 6</div>"
                                + "</div>"
                                + "<div class='chn-row'>"
                                    + "<div class='chn-col-5'>Estoy dentro de una columna de tamanio 5</div>"
                                    + "<div class='chn-col-5'>Estoy dentro de una columna de tamanio 5</div>"
                                + "</div>"
                                + "<div class='chn-row'>"
                                    + "<div class='chn-col-4'>Estoy dentro de una columna de tamanio 4</div>"
                                    + "<div class='chn-col-4'>Estoy dentro de una columna de tamanio 4</div>"
                                    + "<div class='chn-col-4'>Estoy dentro de una columna de tamanio 4</div>"
                                + "</div>"
                                + "<div class='chn-row'>"
                                    + "<div class='chn-col-3'>Estoy dentro de una columna de tamanio 3</div>"
                                    + "<div class='chn-col-3'>Estoy dentro de una columna de tamanio 3</div>"
                                    + "<div class='chn-col-3'>Estoy dentro de una columna de tamanio 3</div>"
                                    + "<div class='chn-col-3'>Estoy dentro de una columna de tamanio 3</div>"
                                + "</div>"
                                + "<div class='chn-row'>"
                                    + "<div class='chn-col-2'>Estoy dentro de una columna de tamanio 2</div>"
                                    + "<div class='chn-col-2'>Estoy dentro de una columna de tamanio 2</div>"
                                    + "<div class='chn-col-2'>Estoy dentro de una columna de tamanio 2</div>"

                                    + "<div class='chn-col-2'>Estoy dentro de una columna de tamanio 2</div>"
                                    + "<div class='chn-col-2'>Estoy dentro de una columna de tamanio 2</div>"
                                    + "<div class='chn-col-2'>Estoy dentro de una columna de tamanio 2</div>"
                                + "</div>"
                                + "<div class='chn-row'>"
                                    + "<div class='chn-col-1'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1'>Estoy dentro de una columna de tamanio 1</div>"

                                    + "<div class='chn-col-1'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1'>Estoy dentro de una columna de tamanio 1</div>"

                                    + "<div class='chn-col-1'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1'>Estoy dentro de una columna de tamanio 1</div>"

                                    + "<div class='chn-col-1'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1'>Estoy dentro de una columna de tamanio 1</div>"
                                + "</div>"
                                + "</div>",
                            display: "<div class='chn-container'>"
                                + "<div class='chn-row'><div class='chn-col-12 bg-gray border-black'>Estoy dentro de una columna de tamanio 12</div></div>"
                                + "<div class='chn-row'><div class='chn-col-11 bg-gray border-black'>Estoy dentro de una columna de tamanio 11</div></div>"
                                + "<div class='chn-row'><div class='chn-col-10 bg-gray border-black'>Estoy dentro de una columna de tamanio 10</div></div>"
                                + "<div class='chn-row'><div class='chn-col-9 bg-gray border-black'>Estoy dentro de una columna de tamanio 9</div></div>"
                                + "<div class='chn-row'><div class='chn-col-8 bg-gray border-black'>Estoy dentro de una columna de tamanio 8</div></div>"
                                + "<div class='chn-row'><div class='chn-col-7 bg-gray border-black'>Estoy dentro de una columna de tamanio 7</div></div>"
                                + "<div class='chn-row'>"
                                    + "<div class='chn-col-6 bg-gray border-black'>Estoy dentro de una columna de tamanio 6</div>"
                                    + "<div class='chn-col-6 bg-gray border-black'>Estoy dentro de una columna de tamanio 6</div>"
                                + "</div>"
                                + "<div class='chn-row'>"
                                    + "<div class='chn-col-5 bg-gray border-black'>Estoy dentro de una columna de tamanio 5</div>"
                                    + "<div class='chn-col-5 bg-gray border-black'>Estoy dentro de una columna de tamanio 5</div>"
                                + "</div>"
                                + "<div class='chn-row'>"
                                    + "<div class='chn-col-4 bg-gray border-black'>Estoy dentro de una columna de tamanio 4</div>"
                                    + "<div class='chn-col-4 bg-gray border-black'>Estoy dentro de una columna de tamanio 4</div>"
                                    + "<div class='chn-col-4 bg-gray border-black'>Estoy dentro de una columna de tamanio 4</div>"
                                + "</div>"
                                + "<div class='chn-row'>"
                                    + "<div class='chn-col-3 bg-gray border-black'>Estoy dentro de una columna de tamanio 3</div>"
                                    + "<div class='chn-col-3 bg-gray border-black'>Estoy dentro de una columna de tamanio 3</div>"
                                    + "<div class='chn-col-3 bg-gray border-black'>Estoy dentro de una columna de tamanio 3</div>"
                                    + "<div class='chn-col-3 bg-gray border-black'>Estoy dentro de una columna de tamanio 3</div>"
                                + "</div>"
                                + "<div class='chn-row'>"
                                    + "<div class='chn-col-2 bg-gray border-black'>Estoy dentro de una columna de tamanio 2</div>"
                                    + "<div class='chn-col-2 bg-gray border-black'>Estoy dentro de una columna de tamanio 2</div>"
                                    + "<div class='chn-col-2 bg-gray border-black'>Estoy dentro de una columna de tamanio 2</div>"

                                    + "<div class='chn-col-2 bg-gray border-black'>Estoy dentro de una columna de tamanio 2</div>"
                                    + "<div class='chn-col-2 bg-gray border-black'>Estoy dentro de una columna de tamanio 2</div>"
                                    + "<div class='chn-col-2 bg-gray border-black'>Estoy dentro de una columna de tamanio 2</div>"
                                + "</div>"
                                + "<div class='chn-row'>"
                                    + "<div class='chn-col-1 bg-gray border-black'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1 bg-gray border-black'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1 bg-gray border-black'>Estoy dentro de una columna de tamanio 1</div>"

                                    + "<div class='chn-col-1 bg-gray border-black'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1 bg-gray border-black'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1 bg-gray border-black'>Estoy dentro de una columna de tamanio 1</div>"

                                    + "<div class='chn-col-1 bg-gray border-black'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1 bg-gray border-black'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1 bg-gray border-black'>Estoy dentro de una columna de tamanio 1</div>"

                                    + "<div class='chn-col-1 bg-gray border-black'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1 bg-gray border-black'>Estoy dentro de una columna de tamanio 1</div>"
                                    + "<div class='chn-col-1 bg-gray border-black'>Estoy dentro de una columna de tamanio 1</div>"
                                + "</div>"
                                + "</div>",
                        }
                    },
                    {
                        id: 'small',
                        name: 'Phones',
                        container:{
                            class: "chn-container",
                            description: "A container is the first part of the structure where every item can be allocated",
                            code: "<div class='chn-container'></div>",
                            display: "<div class='chn-container bg-gray border-black'>Estoy dentro de un contenedor</div>"
                        }
                    }
                ]
            },
            {
                id: 'typography',
                name: 'Typography',
                submenu: [
                    {
                        id: 'helveticaltstdblk',
                        name: 'Helvetica Light Standar Black',
                        container:{
                            class: "chn-helvetica-lt-std-blk",
                            description: "Header Text",
                            code: "<div class='chn-helvetica-lt-std-blk'>Example text</div>",
                            display: "<div class='chn-helvetica-lt-std-blk'>" + loremIpsum + "</div>"
                        }
                    },
                    {
                        id: 'helveticaltstdbold',
                        name: 'Helvetica Light Standar Bold',
                        container:{
                            class: "chn-helvetica-lt-std-bold",
                            description: "Header Text",
                            code: "<div class='chn-helvetica-lt-std-bold'>Example text</div>",
                            display: "<div class='chn-helvetica-lt-std-bold'>" + loremIpsum + "</div>"
                        }
                    },
                    {
                        id: 'helveticaltstdlightzero',
                        name: 'Helvetica Light Standar Light 0',
                        container:{
                            class: "chn-helvetica-lt-std-light-zero",
                            description: "Header Text",
                            code: "<div class='chn-helvetica-lt-std-light-zero'>Example text</div>",
                            display: "<div class='chn-helvetica-lt-std-light-zero'>" + loremIpsum + "</div>"
                        }
                    },
                    
                    {
                        id: 'helveticaltstandarroman',
                        name: 'Helvetica Light Standar Roman',
                        container:{
                            class: "chn-helvetica-lt-std-roman",
                            description: "Header Text",
                            code: "<div class='chn-helvetica-lt-std-roman'>Example text</div>",
                            display: "<div class='chn-helvetica-lt-std-roman'>" + loremIpsum + "</div>"
                        }
                    },
                ]
            },
            // Style
            {
                id: 'header',
                name: 'Headers',
                submenu: [
                    {
                        id: 'titleheading',
                        name: 'Heading titles',
                        container:{
                            class: "chn-title-header",
                            description: "Header Text",
                            code: "<div class='chn-title-header'>This is a Header text</div>",
                            display: "<div class='chn-title-header'>This is a Header text</div>"
                        }
                    },
                    {
                        id: 'descriptionheading',
                        name: 'Heading Description',
                        container:{
                            class: "chn-title-sub-header",
                            description: "A container is the first part of the structure where every item can be allocated",
                            code: "<div class='chn-title-sub-header'>Sub header test</div>",
                            display: "<div class='chn-title-sub-header'>Estoy dentro de un contenedor</div>"
                        }
                    }
                ]
            },
            // Components
            {
                id: 'components',
                name: 'Components',
                submenu: [
                    {
                        id: 'buttons',
                        name: 'Buttons',
                        container:{
                            class: "chn-button-primary",
                            description: "Boton primario",
                            code: "<input type='button' value='Notify me!' class='chn-button-primary'/>",
                            display: "<input type='button' value='Notify me!' class='chn-button-primary'/>"
                        }
                    },
                    {
                        id: 'textbox',
                        name: 'Text Boxes',
                        container:{
                            class: "chn-container",
                            description: "A container is the first part of the structure where every item can be allocated",
                            code: "<div class='chn-container'></div>",
                            display: "<div class='chn-container bg-gray border-black'>Estoy dentro de un contenedor</div>"
                        }
                    },
                    {
                        id: 'modal',
                        name: 'Modals',
                        container:{
                            class: "chn-container",
                            description: "A container is the first part of the structure where every item can be allocated",
                            code: "<div class='chn-container'></div>",
                            display: "<div class='chn-container bg-gray border-black'>Estoy dentro de un contenedor</div>"
                        }
                    },
                    {
                        id: 'carousel',
                        name: 'Carousel',
                        container:{
                            class: "chn-container",
                            description: "A container is the first part of the structure where every item can be allocated",
                            code: "<div class='chn-container'></div>",
                            display: "<div class='chn-container bg-gray border-black'>Estoy dentro de un contenedor</div>"
                        }
                    }
                ]
            },
        ],
    }
})
