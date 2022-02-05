const shapes = { square: "square", circle: "circle" };

class Shape {
    window;

    constructor(window, shape) {
        // Null check for window
        if (window == null)
        {
            console.error("Given window is invalid.");
            return;
        }
        
        // Check if shape is valid
        if (!(shape in shapes))
        {
           
            console.error(`Invalid shape ${shape}.`);
            return;
        }

        this.window = window;
        
    }
}