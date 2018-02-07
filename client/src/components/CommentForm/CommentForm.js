import React from "react";
import { Input } from "react-materialize";
import { Col, Row } from "../Grid";



class CommentForm extends Component {

    state = {
	
        matches: [],
        githubUrl: ""

	};

    componentDidMount() {
        console.log("Pathname = " + window.location.pathname);
        const url = window.location.pathname;
        const id = url.split("/")[3];
        // const id = this.props.id
        console.log("id = " + id);

        this.loadQuestionnaire(id);
    };


    loadQuestionnaire = (id) => {
        API.getMatches(id)
            .then(res =>
                this.setState({
                    matches: res.data

                })
            )
            .then(() => {
                console.log(this.state.matches);
                console.log(this.state.firstName);
            }) // MUST MAKE THIS A FUNCTION that renders a FUNCTION >>> by making this a function in a PROMISE chain, it will NOT PROCESS until the promise BEFORE IT has rendered its result!!! :)
            .catch(err => console.log(err));
    };



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };



    render(){
        return
        <div>

            <Row>
            {this.state.matches.length ? ( 
            <form>
                this.state.matches.map(match => ( 
                 <main key = { match._id }>
            
            <Col size="sm-6">
        <img className="img-responsive" id="matchAvatar" src={match.githubAvatar} alt="Github Profile Pic"/>
        <h3>
	   <strong className = "userFullName" > { match.firstName } { match.lastName } </strong> 
       
		</h3>
            </Col>
            
            <Col size="sm-6">
                <Input 
                placeholder="Your feedback here!" s={6} label="feedback" />
            </Col>
               
               </main>
                </form>
            ): ( 
                <h3 className = "text-center" > No Results to Display </h3>
            )
        }
    
            </Row>
        </div>
                
         
        
    }

}







export default CommentForm;