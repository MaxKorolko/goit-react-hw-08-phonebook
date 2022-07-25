import Section from 'components/Section/Section';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
import UserMenu from 'components/UserMenu/UserMenu';
import Container from 'components/Container/Container';

export default function ContactsPage() {
  return (
    <>
      <UserMenu />
      <Container>
        <Section tittle="Phonebook">
          <Form />
        </Section>

        <Section tittle="Contacts">
          <Filter />
          <Contacts />
        </Section>
      </Container>
    </>
  );
}
