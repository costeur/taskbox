import React from 'react';
import ReactDOM from 'react-dom';


class Car extends React.Component {
        constructor(props) {
            super(props);
            this.state = { color: "red", brand: "mecredes ", year: "1998" };
        }

        changeYear = () => { this.setState({ year: "2000" }); }

        render() {
                return ( < div > < p > Hi this is Tiphs car and it is { this.state.color }, and it is a { this.state.brand }
                    from { this.state.year }! < /p>;

                    <
                    button type = "button"
                    onClick = { this.changeYear } > change color < /button> <
                    /div>)}
                }

                ReactDOM.render( < Car / > , document.getElementById('car'));


                class Heye extends React.Component {
                    render() {
                        return <h2 > I am a { this.props.color }
                        Car! < /h2>;
                    }
                }

                ReactDOM.render( < Heye color = "red " / > , document.getElementById('hey'));


                const myfirstelement = ( < h1 > Hello React! < /h1>);
                        ReactDOM.render(myfirstelement, document.getElementById('root'));

                        const contactform = < input label = "Name"
                        type = "text" / >
                        ReactDOM.render(contactform, document.getElementById("contact"));