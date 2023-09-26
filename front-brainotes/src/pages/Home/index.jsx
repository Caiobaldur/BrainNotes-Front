import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home() {

  return(
    <Container>
      <Brand>
        <h1>BraiNotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li><ButtonText title="Todos"  $isactive/></li>
        <li><ButtonText title="React"  $isactive/></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{title: 'React', tags: [{id: '1', name: 'React'}, {id: '2', name: 'Rocketseat'}]}}/>
        </Section>
      </Content>

      <NewNote>
        <FiPlus type='button'/>
        Criar nota
      </NewNote>

    </Container>
  );
}