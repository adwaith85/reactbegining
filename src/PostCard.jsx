import Accordion from 'react-bootstrap/Accordion';

function PostCard(props) {

  return <>
    <div style={{
      border: "3px solid black",
      borderRadius: 10,
      background: " linear-gradient(30deg,#0753,#3c3eaf)",
      margin: "5px",

      fontWeight: "bold"
    }}>
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header ><h1 style={{ fontSize: "20px", fontWeight: "bolder", fontFamily: "Montserrat" }}> {props.name}</h1>
          </Accordion.Header>
          <Accordion.Body>

            <h5 style={{ fontSize: "25px", fontWeight: "bolder", fontFamily: "Montserrat", marginLeft: 160 }}>{props.pin}</h5>

            <div style={{ fontWeight: "bold", fontFamily: "Montserrat", margin:5 }}> 
              <h6 >BranchType</h6>
                <h5><b>{props.bt}</b></h5><br />
              <h6>location:</h6>
              <h5><b>{props.dis}/{props.st}/{props.con}</b></h5><br />
              <h6>Region:</h6>
              <h5><b>{props.reg}</b></h5><br />
              <h6>Division</h6>
              <h5><b>{props.dec}</b></h5><br />
              <h6>DeliveryStatus</h6>
              <h5><b>{props.ds}</b></h5><br />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>

  </>
}

export default PostCard