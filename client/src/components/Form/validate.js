//Validar: name, image,  weight min y max, height min y max, life_span max y min, temps:
export const validate = (dogCreate) => {
    let errors = "";
    let regExpression = /^https?:\/\/.*\.(jpg|png|gif)$/;

    //name
    const nameValidate = (name) => {
        if (!name.length) {
            errors = "This field is required"
        }
        if (name.length > 20) {
            errors = "Don't enter more than 20 characters"
        }
        if (!/^[A-Za-z\s]+$/.test(name)) {
            errors = "Only enter letters and spaces"
        }
    };

    //imagen >>> "https://www.example.com/image.jpg"
    const imgValidate = (image) => {
        if (!image) {
            errors = "This field is required"
        }
        if (!regExpression.test(image)) {
            errors = "Image URL can be JPG, GIF or PNG"
        }
    }

    //temperaments:
    const tempsValidate = (temperaments) => {
        if (temperaments.length < 1) {
            errors = "You must select at least one option"
        }
    }

    //weight min y max
    const weightValidate = (weight_min, weight_max) => {
        if (!weight_max || !/^[0-9]+$/.test(weight_max)) {
            errors = "You must enter a value"
        }
        if (weight_max < 4 || weight_max > 100) {
            errors = "The maximum weight must be between 4 and 100"
        }
        if (!weight_min || !/^[0-9]+$/.test(weight_min)) {
            errors = "You must enter a value"
        }
        if (weight_min < 1 || weight_max > 50) {
            errors = "The minimun weight must be between 4 and 100"
        }
    }

    //height min y max
    const heightValidate = (height_min, height_max) => {
        if (!height_max || !/^[0-9]+$/.test(height_max)) {
            errors = "You must enter a value"
        }
        if (height_max < 10 || height_max > 100) {
            errors = "The maximum height must be between 10 and 100"
        }
        if (!height_min || !/^[0-9]+$/.test(height_min)) {
            errors = "You must enter a value"
        }
        if (height_min < 10 || height_min > 100) {
            errors = "The maximum height must be between 10 and 100"
        }
    }

//life_span
    const lifeValidate = (life_span_min, life_span_max) =>{
        if (!life_span_max || !/^[0-9]+$/.test(life_span_max)) {
            errors = "You must enter a value"
        }
        if(life_span_max < 7 || life_span_max > 20){
            errors = "The maximum life expectancy should be between 8 and 20"
        };
        if (!life_span_min || !/^[0-9]+$/.test(life_span_min)) {
            errors = "You must enter a value"
        }
        if(life_span_min < 5 || life_span_min > 15){
            errors = "The minimun life expectancy should be between 5 and 15"
        };
    }

    lifeValidate(dogCreate.life_span_max, dogCreate.life_span_min)
    heightValidate(dogCreate.height_max, dogCreate.height_min)
    weightValidate(dogCreate.weight_min, dogCreate.weight_max)
    tempsValidate(dogCreate.temperaments)
    imgValidate(dogCreate.image)
    nameValidate(dogCreate.name)

    return errors;
}