import React, {Component} from 'react';
import './mySass.scss';

let r = 1;
let c = 1;

const rows = [
  {
    id: r++,
    children: [
      {
        no: c++,
        type: "text",
        name: 'one',
      },
      {
        no: c++,
        type: "text",
        name: 'two',
      },
    ]
  },
  {
    id: r++,
    children: [
      {
        no: c++,
        type: "text",
        name: 'three',
      },
      {
        no: c++,
        type: "text",
        name: 'four',
      },
    ]
  },
  {
    id: r++,
    children: [
      {
        no: c++,
        type: "text",
        name: 'five',
      },
    ]
  },
  {
    id: r++,
    children: [
      {
        no: c++,
        type: "textarea",
        name: 'six',
        cols: 30,
        rows: 10,
      },
    ]
  },
  {
    id: r++,
    children: [
      {
        no: c++,
        type: "checkbox",
        name: 'seven',
        choices: [
          {
            val: "option one",
            text: "dit is een mogelijkheid",
          },
          {
            val: "option two",
            text: "dit is een andere mogelijkheid",
          },
          {
            val: "option three",
            text: "dit is nog een andere mogelijkheid",
          },

        ]
      },
    ]
  },
]

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      rows: rows,
      value: 'coconut',
    };
    // this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    console.log("target"+event.target);
    console.log("target name "+event.target.name);
    this.setState({value: event.target.value});
    console.log("state value "+this.state.value);
    console.log("changed");
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render(){
    return (
      <div>
        <div>
          <div className="inside">
            <p>maak hier uw formulier</p>
            <form onSubmit={this.handleSubmit}>
            <InputGroup>
              <Field
                no = "aantal rijen met twee kolommen"
                name="tweeCol"
                type="number"
                value={this.state.tweeCol}
                onChange={this.handleChange}
              >
              </Field>
              {/* <Field
                no = "aantal rijen met één kolom"
                name="eenCol"
                type="number"
                value={this.state.eenCol}
                onChange={this.handleChange}
              >
              </Field>
              <Field
                no = "aantal textareas"
                name="textarea"
                type="number"
                value={this.state.textarea}
                onChange={this.handleChange}
              >
              </Field>
              <Field
                no = "aantal checkboxes"
                name="checkboxes"
                type="number"
                value={this.state.checkboxes}
                onChange={this.handleChange}
              >
              </Field> */}
             </InputGroup> 
             <button type="submit" className="submit">
                Maak form
              </button>
            </form>
          </div>
        </div>
        <div className="form">
          <div className="inside">
              <h2>my custom form</h2>
              <form>
                {this.state.rows.map(item =>
                  <InputGroup>
                    {item.children.map(subitem =>{
                      if(subitem.type === "text"){
                        return(
                          <Field
                            no = {subitem.no}
                            name={subitem.name}
                            type={subitem.type}
                          >
                          </Field>)
                      }else if(subitem.type === "textarea"){
                        return(
                          <TextArea
                            no = {subitem.no}
                            name={subitem.name}
                            cols={subitem.cols}
                            rows={subitem.rows}
                          >
                          </TextArea>
                        )
                      }else if(subitem.type === "checkbox"){
                        return(
                          <div className="checkbox">
                            {subitem.choices.map(choice =>{
                              return(
                                <Checkbox
                                  val = {choice.val}
                                  text = {choice.text}
                                >
                                </Checkbox>
                              )
                            })
                            }
                          </div>
                        )
                      }else{
                        return(
                          <div></div>
                        )
                      }
                    }
                    )}
                  </InputGroup>
                )}
                <button type="submit" name="submit" className="submit">
                  Verstuur
                </button>
              </form>
          </div>
      </div>
      </div>
    );
  }
}

const InputGroup = ({children}) =>
  <div className="group">
    {children}
  </div>

const Field = ({name, type, no, value, onChange}) =>
      <div>
        <label for={name}>Waarde {no}</label>
        <input type={type} name={name} value={value} onChange={onChange} />
      </div>

const TextArea = ({name, no}) =>
      <div>
        <label for={name}>Waarde {no}</label>
        <textarea name={name} cols="30" rows="10"></textarea>
      </div>

const Checkbox = ({val, text}) =>
    <div>
      <input type="checkbox" id={val} name="checkbox" value={val} />
      <label for={val}>{text}</label>
    </div>


export default App;
