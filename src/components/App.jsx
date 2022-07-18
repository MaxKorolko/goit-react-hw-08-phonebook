import Filter from './Filter/Filter';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Container from './Container/Container';

export default function App() {
  return (
    <Container>
      <Section tittle="Phonebook">
        <Form />
      </Section>

      <Section tittle="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </Container>
  );
}
