import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Form in React</h1>
      <form>

        <div className='col'>
          <label htmlFor='firstname'>Enter First Name</label>
          <input id='firstname' type='text' placeholder='Enter your first name' />

          <label htmlFor='email'>Enter Email</label>
          <input id='email' type='email' name='email' placeholder='Enter your email' />

          <label htmlFor='contact'>Contact#</label>
          <input id='contact' type='tel' name='contact' placeholder='Enter your contact number' />
        </div>

        <div className='genderoptions'>
          <label>Gender</label>
          <div>
            <input id='male' type='radio' name='gender' /> Male
          </div>
          <div>
            <input id='female' type='radio' name='gender' /> Female
          </div>
          <div>
            <input id='trans' type='radio' name='gender' /> Trans
          </div>
        </div>

        <div className='subjectoptions'>
          <label>Subject</label>
          <select>
            <option value='Math'>Math</option>
            <option value='Physics'>Physics</option>
            <option value='English'>English</option>
          </select>
        </div>

        <div className='baki'>
          <label htmlFor='resume'>Resume</label>
          <input type='file' name='resume' />

          <label htmlFor='url'>URL</label>
          <input type='text' name='url' placeholder='Enter Image URL' id='url' />

          <label htmlFor='about'>About</label>
          <textarea name='about' id='about' cols='30' rows='10' placeholder='Enter Description' />

          <div className='button-container'>
            <button type='button' className='reset-btn'>Reset</button>
            <button type='submit' className='submit-btn'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
