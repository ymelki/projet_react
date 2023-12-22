import { Card } from "semantic-ui-react";


function RepoResults({list}) {

  console.log(list);
  const items=list.map(
    (repos) => (
      <Card
        key={repos.id} 
        image={repos.owner.avatar_url}
        header={repos.name}
        meta={repos.owner.login}
        description={repos.description}
      />
    )
  )
    return (

    <Card.Group itemsPerRow={3} stackable>
        {items}
    </Card.Group>
    
    );
}
  
  export default RepoResults;