
function AnimalFormView ({
    onSubmitHandler,
    formTitle,
    buttonTitle,
    animalName, 
    setAnimalName 
}) {
    return (
        <section>
            <form onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>{formTitle}</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" value={animalName} onChange={(e) => setAnimalName(e.target.value)} id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="species">Gender</label>
                        <span className="input">
                            <select type="text" name="species">
                                <option value="Cat" >Male</option>
                                <option value="Dog" >Female</option>  
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="species">Species</label>
                        <span className="input">
                            <select type="text" name="species">
                                <option value="Cat" >Cat</option>
                                <option value="Dog" >Dog</option>  
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <input className="button" type="submit" className="submit" value={buttonTitle} />
                </fieldset>
            </form>
        </section>
    );
};

export default AnimalFormView;