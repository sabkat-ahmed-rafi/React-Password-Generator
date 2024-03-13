import React, { useCallback, useEffect, useRef, useState } from "react";

const GeneratorArea = () => {
  // Setting initiative value for length of character, Number is going to be added or
  // not by click, Character in going to be added or not by click And setting the initiative
  // value for password which is an empty string.
  const [length, setLength] = useState(8);
  const [addNumber, setAddNumber] = useState(false);
  const [addCharacter, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    // In this value i declared a empty string which is going to be the password keeper in this function.
    let pass = "";
    // declare this string for looping.
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // Checking if the number and character's checkbox is clicked or not
    if (addNumber) string += "0123456789";
    if (addCharacter) string += "!@#$%^&*(){}[]?<>=";
    // looping through the string and setting the loop's length by using length from the useState
    for (let i = 1; i <= length; i++) {
      // This eachNumber will pick up a random  number based on the length of the the string using Math.randon()
      // function and making the Number integer using the Math.floor()
      let eachNumber = Math.floor(Math.random() * string.length + 1);
      // In this line of code each time a random string character is added in the pass variable.
      pass += string.charAt(eachNumber);
    }
    // Giving the pass using setPassword. This will set the pass value in the password variable in the useState
    setPassword(pass);
  }, [length, addNumber, addCharacter, setPassword]); //  set some dependency values.
  // if the value of the elements in the dependency is changed, It won't create a new object in
  //the memory but it will only changes the values which are changed in the dependency
  // without creating a new instance of the function


  useEffect(() => {
    passwordGenerator();
  }, [length, addNumber, addCharacter]); // This fucntion will run every time when
  // the value of length, addNumber, addCharacter will change

  // This useRef state is only used for showing the selected feature it's not for copying text.
  // we will use a ref attribute in the input area there the password will be
  // generated and give the refPass as a reference like this ref="refPassword" .
  const refPassword = useRef();
//   This event handler will copy the text from the input area 
  const copyToClipBoard = () => {
    // This will select the Password to clip board 
    refPassword.current.select();
    // This code will copy the Text from the input area 
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="bg-slate-400  flex justify-center mx-36 py-5 rounded-xl">
      <section>
        <div>
          <input
            className="bg-white py-3 px-5 w-3/4 font-semibold  text-black rounded-l-2xl"
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            ref={refPassword}
          />
          <button
            className="bg-blue-600 text-white font-bold px-5 py-3  hover:bg-purple-600 rounded-r-2xl"
            onClick={copyToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="mt-5 space-x-2 flex text-black font-semibold justify-center">
          <input
            type="range"
            // setting the minimum and maximum range
            min={8}
            max={22}
            // Getting the each value on the Range Input with setLength. This will set the lenght based on the value with onChange
            onChange={(event) => {
              setLength(event.target.value);
            }}
          />
          {/* Showing the initial value of range length  */}
          <lebel>Length: {length}</lebel>
          <input
            type="checkbox"
            // Changing the initial value of the addNumber with onChange when the checkbox is clicked
            onChange={() => {
              setAddNumber((prev) => !prev);
            }}
          />
          <level>Number</level>
          <input
            type="checkbox"
            // Changing the initial value of the addCharacter with onChange when the checkbox is clicked
            onChange={() => {
              setCharacter((prev) => !prev);
            }}
          />
          <lebel>Character</lebel>
        </div>
      </section>
    </div>
  );
};

export default GeneratorArea;
