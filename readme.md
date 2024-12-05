# Earbuds Info and Material viewer
#### Hey Marco!

A web application that dynamically fetches and displays information about earbuds, including their key features (info boxes) and materials, using the Fetch API.

## Features
1. Dynamic Info Boxes
Fetches and displays information about earbuds' key features from the /infoboxes API endpoint.
2. Each feature is linked to a corresponding hotspot in the UI.
Materials List
3. Fetches and displays a list of materials from the /materials API endpoint.
4. Dynamically generates a list of materials with optional images and descriptions.

## APIs used:
1. Info Boxes API:
**Endpoint: https://swiftpixel.com/earbud/api/infoboxes**
Provides a list of features with titles, descriptions, and optional images.
2. Materials API:
**Endpoint: https://swiftpixel.com/earbud/api/materials**
Provides a list of materials with details and images.

## Error Handling

If the API call fails, an error message is displayed to the user.
Logs errors in the console for debugging.


## Contributions are welcome!

1. Fork the repository.
2. Create a new branch for your feature:
*git checkout -b feature-name* 
3. Commit your changes:
*git commit -m "Add feature-name"*
4. Push to your branch:
*git push origin feature-name* 
5. Submit a pull request.**

## License

This project is licensed under the MIT License.