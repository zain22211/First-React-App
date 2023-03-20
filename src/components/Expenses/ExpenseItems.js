import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItems.css';

function ExpenseItems(props) {

  let title= props.title;
  const ClickHandler = ()=>{
    title = "Updated!!";
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'> 
        <h2>{title}</h2> 
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={ClickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItems;
