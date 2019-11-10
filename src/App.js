import React from "react";
import Counter from "./Components/ReduxCounter/Counter"
import Form from "./Components/ReduxForm/Form"
class App extends React.Component {
    render() {

        return(
            <>
            <Form />
            <Counter />
            </>
        )
    }
}
export default App;