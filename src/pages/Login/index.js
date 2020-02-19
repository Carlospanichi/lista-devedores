import React from 'react';

import logo from '../../assets/logo.png';
import Input from '../../components/FormControl/Input';

export default function Login() {
  return (
    <main>
      <img title="Procob" style={{ width: '300px' }} src={logo} alt="Logo" />
      <form action="">
        <Input placeholder="Seu Usuário" type="text" id="login" name="login" />

        <Input
          placeholder="Sua Senha"
          type="password"
          id="senha"
          name="senha"
        />
        <button type="submit">Entrar</button>
      </form>
      <div>
        <p>
          Não consegue acessar?
          <br />
          Ligue para (**)****-****
        </p>
      </div>
    </main>
  );
}
