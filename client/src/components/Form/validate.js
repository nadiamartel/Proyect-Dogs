//Validar: name, image,  weight min y max, height min y max, life_span max y min, temps:
export const validate = (dogCreate) => {
    let errors = {};
    let regExpression = /^https?:\/\/.*\.(jpg|png|gif)$/;
    //imagen >>> "https://www.example.com/image.jpg"

        if (!dogCreate.name) {
            errors.name = "This field is required"
        }
        if (dogCreate.name.length > 20) {
            errors.name = "Don't enter more than 20 characters"
        }
        if (!/^[A-Za-z\s]+$/.test(dogCreate.name)) {
            errors.name = "Only enter letters and spaces"
        }
        if(!dogCreate.image){
            errors.image = "This field is required"
        }
        if(!regExpression.test(dogCreate.image)){
            errors.image = "Image URL can be JPG, GIF or PNG"
        }
        if(dogCreate.temperaments.length < 1){
            errors.temperaments = "You must select at least one option"
        }
        //>>> *** <<<\\

        if(!dogCreate.weight_max || !dogCreate.weight_min){
            errors.weight = "Maximum value cannot be less than the minimum"
        }
        // if(!/^[0-9]+$/.test(dogCreate.weight)){
        //     errors.weight = "You must enter a value"
        // }
        if(!dogCreate.height_max || !dogCreate.height_min){
            errors.height = "Maximum value cannot be less than the minimum"
        }
        if(!dogCreate.life_span_max || !dogCreate.life_span_min){
            errors.life_span = "You must enter a value"
        }

    return errors;
}