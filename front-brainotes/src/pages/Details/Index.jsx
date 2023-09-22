import {Container, Links, Content} from './styles';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';

export function Details () {

  
  return(
    <Container>
      <Header/>
        <main>
          <Content>
            <ButtonText title="Excluir nota"/>

            <h1>
              Introdução ao React
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi suscipit sed nihil nostrum id architecto, 
              dolorem voluptatem amet totam, ea debitis enim mollitia voluptate. Odio quibusdam saepe sint consectetur vitae?
            </p>

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
         </Content>
        </main>
    </Container>
  )
}