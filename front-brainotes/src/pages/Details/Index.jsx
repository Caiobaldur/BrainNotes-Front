import {Container, Links} from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

export function Details () {

  
  return(
    <Container>
      <Header/>

      <Section title="Links Úteis">
        <Links>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="Express"/>
        <Tag title="Node"/>
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}