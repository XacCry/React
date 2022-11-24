import React from 'react';
import { Container,Form,Button,Table} from 'react-bootstrap';
import axios from 'axios';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
class Cramerrule extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = { val : [[]] , show_total : [], size_array : '', show_martix_web : [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.CramerCalculation = this.CramerCalculation.bind(this)
        this.apiinput = this.apiinput.bind(this);  
    }

    CramerCalculation(size_array,val,show_web){
      var a = [[]]
      var k=0,i=0,j=0
      for(i=0;i<size_array;i++){
        a[i]= [];
        for(k=0;k<size_array+1;k++){
            a[i][k] = val[i][k]
        }
      }
     var x = []
      for(k=0;k<size_array;k++){
          for(i=k+1;i<size_array;i++){
              var temp = a[i][k]/a[k][k]
              for(j=k+1;j<=size_array;j++){
                  a[i][j] = a[i][j] - temp*a[k][j]
              }
          }
      }
      for(i=size_array-1;i>=0;i--){
          x[i] = a[i][size_array]
          for(j=i+1;j<size_array;j++){
              x[i] = x[i]-a[i][j]*x[j]
          }
          x[i] = x[i]/a[i][i]
      }
      for(i=0;i<size_array;i++){
          console.log(x[i])
      }
      this.setState({show_total : this.state.show_total(x)})
      show_web =[[]]
      for(i=0;i<size_array;i++){
        show_web[i]= [];
        for(k=0;k<size_array+1;k++){
          if(k<size_array-1){
          show_web[i][k] = `(${val[i][k]} *(${x[k]}))+`
          }
          else if(k<size_array){
            show_web[i][k] = `(${val[i][k]} *(${x[k]}))`
          }
          else if(k===size_array){
            show_web[i][k] = ` = ${val[i][k]}`
          }
        }
      }
      console.log(show_web)
      this.setState({show_martix_web : this.state.show_martix_web(show_web)})
    }

    handleChange(rowIndex, columnIndex,event){
      this.state.val[rowIndex][columnIndex] = Number(event.target.value);
    }
    handleAdd(event){
      var array = [[]]
      for(var i=0;i<Number(event.target.value);i++)
      {
        array[i]= [];
        console.log(array);
        for(var k=0;k<Number(event.target.value)+1;k++)
        {
          array[i][k]= `${i} ${k}`;
        }
        this.setState({val :(array)})
        this.setState({size_array :(Number(event.target.value))})
      }
    }  
    apiinput(){
      axios.get('http://localhost:3800/Cramer')
      .then(res => {
        const data = res.data
        // console.log(data)
        // console.log(res.data[0].size)
        // console.log(res.data[0].array)
        this.setState({size_array : res.data[0].size})
        this.setState({val :(res.data[0].array)})
      }
      )
      }
    render(){
      return(
        <>
        <h1>Cramer's rule</h1>
         <Container>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control size="lg" type="text" name = "dimentions" value={this.state.size_array} onChange={this.handleAdd} placeholder="Input Number of Dimentions" />
            </Form.Group>
          </Form>
          <br></br>
          <br></br>
          <Table responsive="sm" style={styles}>
            <tbody>
              {this.state.val.map((row, rowIndex) => (
                <tr>
                  {row.map((column, columnIndex) => (
                    <td >
                      <input id={column} value = {this.state.val[rowIndex][columnIndex]} onChange={event => this.handleChange(rowIndex, columnIndex, event)}/>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
            <br></br>
              <button onClick={()=>this.CramerCalculation()}>Calculation</button>
        </Container>
          <button onClick={()=>this.apiinput()}>API</button>
          {this.state.show_total.map((total,i)=>(
            <h1 id={i}>X{i+1}&nbsp; &nbsp;{total}</h1>))}
              {this.state.show_martix_web.map((show_martix,count)=>(<h1 id={count}>แถวที่{count+1}&nbsp; &nbsp; {show_martix}</h1>))}  
        </>
      );
    }
}

export default Cramerrule