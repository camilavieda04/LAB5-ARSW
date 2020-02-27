# LAB5-ARSW

1. Include within the Gradle dependencies (build.gradle) the 'webjars' of jQuery and Bootstrap (this allows you to have these JavaScript libraries locally when building the project):

    A continuación se agregaron las dependencias en el archivo build.gradle
    ![Capture](https://user-images.githubusercontent.com/48154086/75450555-0e89a400-593d-11ea-976c-5e75d7badbf9.PNG)
    
2. Create the directory where the JavaScript application will reside. As SpringBoot is being used, the path to put in the same static content (static Web pages, HTML5 / JS applications, etc.) is:

    Se creo el directorio static en el directorio resources  
    ![Capture1](https://user-images.githubusercontent.com/48154086/75450561-10ebfe00-593d-11ea-9bb4-4e29436c3b79.PNG)

3. Create, in the previous directory, the index.html page, only with the basics: title, field for author capture, 'Get blueprints' button, field where the name of the selected author will be displayed, the HTML table where it will be displayed the list of plans (with only the headings), and a field where the total points of the author's plans will be shown. Remember to associate identifiers with these components to facilitate your search through selectors.

    A continuación creamos un espacio de entrada en donde digitaremos el autor y un boton de "Get Blueprints" en donde se retornaran todos     los blueprints de acuerdo a un autor específico.
    ![Capture](https://user-images.githubusercontent.com/44879884/75451597-d2574300-593e-11ea-9f45-cfc7790dfd4e.PNG)

4. In the <head> element of the page, add the references to the jQuery, Bootstrap libraries and the Bootstrap style sheet.
    
    Se completó el index.html 
    
    ``` html
    <html>
    <head>
        <title>Blueprints</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script src="/webjars/jquery/3.1.0/jquery.min.js"></script>
        <script src="/webjars/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="js/apimock.js"></script>
        <script src="js/app.js"></script>
        <link rel="stylesheet"
          href="/webjars/bootstrap/4.1.2/css/bootstrap.min.css" />
    </head>

    <body>
        <form action="" method="get" id="form">
        <label for="fname">Author:</label>
        <input type="text" id="fname" name="fname">
        </form>

        <button type="submit" form="form" value="Submit">Get Blueprints</button>
    </body>
    </html>

    ```
