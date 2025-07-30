import Card  from "./Card";
import Interest from './interest'
import Address from "./Address";
function Home(){
    return <>
    <Address/>
{/* <Table/> */}
    </>
}

export default Home


function Table(){

    const data=[
            {
        "Name": "Kannur",
        "Description": null,
        "BranchType": "Head Post Office",
        "DeliveryStatus": "Delivery",
        "Circle": "Kerala",
        "District": "Kannur",
        "Division": "Cannanore",
        "Region": "Calicut",
        "Block": "Kannur",
        "State": "Kerala",
        "Country": "India",
        "Pincode": "670001"
      },
      {
        "Name": "Kannur Railway Station",
        "Description": null,
        "BranchType": "Sub Post Office",
        "DeliveryStatus": "Non-Delivery",
        "Circle": "Kerala",
        "District": "Kannur",
        "Division": "Cannanore",
        "Region": "Calicut",
        "Block": "Kannur",
        "State": "Kerala",
        "Country": "India",
        "Pincode": "670001"
      },
    ]
    return <>
    <table border={true}>

        <tr>
            <th>Branch Name</th>
            <th>Branch TYPE</th>
            <th>Pincode</th>
        </tr>
        {
            data.map(item=><tr>
                <td>{item.Name}</td>
                <td>{item.BranchType}</td>
                <td>{item.Pincode}</td>
            </tr>)
        }
    </table>
    </>
}