import './DropDownList.css';
const Tab = (props) =>  {
    const choices = ["Consulting","Strategic Management","Digital Process Mnagement","Interpersonal Skills"];

    return (
        <>
                <div className="dropdown">
                    {props.name ?? <span>{props.name}</span>}
                    <div class="dropdown-content">
                        {choices.map( x => (<p>{x}</p>))}
                    </div>
                </div>
        </>
    );
}
export default Tab;