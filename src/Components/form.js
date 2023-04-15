const Form = () => {
    return (
    <div className="container">
        <form>
            <label for="inputName">Name</label>
            <input type="text" id="inputName" required />
            <label for="inputSurname">Surname</label>
            <input type="text" id="inputSurname" required />
            <label for="inputDob">Date of birth</label>
            <input type="date" id="inputDob" required />
            <label for="inputRadioM">Gender</label>
            <div className="gender">
            <input type="radio" id="inputRadioM" name="option1" value="option1" width="20" required />
            <span>Male</span>
            <input type="radio" id="inputRadioF" name="option1" value="option2" required />
            <span>Female</span>
            </div>
            <label for="inputNation">Nationality</label>
            <input type="text" id="inputNation" required />
            <label for="inputReligion">Religion</label>
            <input type="text" id="inputReligion" required />
            <button type="submit">Submit</button>
        </form>
    </div>
    );
}

export default Form;