import { Container } from "./style";
import{RiStarFill, RiStarLine } from 'react-icons/ri'
import { Tags } from "../../components/Tags"

export function Sumary({data, ...rest}){

  const emptyStar = <RiStarLine/>
  const fullStar = <RiStarFill/>
  
  function handleRating() {
    switch (data.rating) {
      case 0:
        return (
          <>
            {emptyStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
          </>
        );
      case 1:
        return (
          <>
            {fullStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
          </>
        );
      case 2:
        return (
          <>
            {fullStar}
            {fullStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
          </>
        );
      case 3:
        return (
          <>
            {fullStar}
            {fullStar}
            {fullStar}
            {emptyStar}
            {emptyStar}
          </>
        );
      case 4:
        return (
          <>
            {fullStar}
            {fullStar}
            {fullStar}
            {fullStar}
            {emptyStar}
          </>
        );
      case 5:
        return (
          <>
            {fullStar}
            {fullStar}
            {fullStar}
            {fullStar}
            {fullStar}
          </>
        );
      default:
        return null;
    }
  }
  
return(
  <Container {...rest}>

    <div className="titleSumary"><h1>{data.title}</h1></div>

    <span>
    {
      handleRating()
    }
    
    </span>

    <textarea value={data.description} 
    rows= "2"
    readOnly={true}
    />
   

      {
        data.tags.map(tag => <Tags key={tag.id} title={tag.name}/>)
      }
    
    
  </Container>
)
}