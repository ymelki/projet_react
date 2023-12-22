import { Message as MessageSemanticUI } from 'semantic-ui-react';

function Message({total}) {
    return (
      <MessageSemanticUI>
      La recherche a retourné {total} résultats
      </MessageSemanticUI>
      );
}
  
export default Message;