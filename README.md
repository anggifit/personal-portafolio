
# Personal Portfolio
This is a personal portfolio project developed using Vite.js and React, with styles provided by Tailwind CSS. The aim of this project is to create an interactive and visually appealing website to showcase your skills, projects, and professional experience.


## Features

- Vite.js: Vite has been used as the bundler for the project development, providing a fast and efficient development experience.
- React: The React.js library has been utilized for building components and managing the state of the application.
- Tailwind CSS: The project's styles have been created using Tailwind CSS, making it easy to create custom and responsive layouts.
- Icons: Material Symbols icons have been used to provide a cohesive visual experience throughout the site.
- EmailJS Integration: EmailJS has been integrated for the functionality of sending messages from the contact form. Setting up .env variables is necessary for EmailJS integration. Please ensure to create an account on EmailJS and configure the required variables in the .env file. Refer to the EmailJS documentation for detailed instructions https://www.emailjs.com/docs/sdk/installation/.



## Environment Variables

Before running the application, make sure to correctly configure the environment variables in the .env file (provided in the emailjs account settings https://www.emailjs.com/docs/examples/reactjs/ )

`VITE_SERVICE_ID`

`VITE_TEMPLATE_ID`

`VITE_PUBLIC_KEY`


## User Data

The user information is located in the data.json file. Make sure to provide the necessary details in this file to be displayed correctly in the portfolio.

## Icons and Skills

### Icons

The icons used in the portfolio are located in the `assets` folder. If you need to add a new icon that is not already in the folder, place the new icon in the `assets` folder.

### Adding New Skills

When adding a new skill that is not already included in the portfolio, you must also update the cases in the `skillsImage` function located in the `utils` directory.


## Running the Project

Follow these steps to run the project on your local machine:

- Clone this repository to your local machine.
- Install dependencies using npm or yarn:
```bash
    npm install

```
- Set up the environment variables in a .env file as mentioned above.
- Run the project locally:
    ```bash
    npm run dev

- Open your web browser and navigate to http://localhost:5173 to see the portfolio in action.

## Authors

- [@anggifit]( https://github.com/anggifit)


## Contributing

Contributions are always welcome! If you wish to contribute to this project, please open an issue first to discuss the proposed changes.


## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

