import Accordion from 'react-bootstrap/Accordion';

function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>éditeur de site</Accordion.Header>
        <Accordion.Body>
        <h4>JOHN DOE</h4>
           <address>40 rue Laure Diebold</address>
           <address>69009 Lyon</address>
           <address>10 20 30 40 50</address>
           <address>john.doe@gmail.com</address>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hébergeur</Accordion.Header>
        <Accordion.Body>
        <h4>Alwaysdata</h4>
         <address>91 rue du faubourg saint-Honoré</address>
         <address>75008 paris</address>
         <address><a href="mail">www.Alwaysdata.com</a></address>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Crédit</Accordion.Header>
        <Accordion.Body>
        <span>ce site a été réalisé par john doe étudiant au <a href="cef.fr">Centre européen de formation</a></span>
         <span>les images utilisées sur ce site sont libres de droits sur le site <a href="www.pixabay.com"></a></span>
          <span>la favicon de ce site a été fournie par <a href="john doe">john doe icons-flavoicon</a></span>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
}

export default AlwaysOpenExample;