import Professor from '../entities/professor.entity';
import ProfessorRepository from '../repositories/professor.repository';
import { FilterQuery } from '../utils/database/database';
import Mensagem from '../utils/mensagem';
import { Validador } from '../utils/utils';

export default class ProfessorController {
  async obterPorId(id: number): Promise<Professor> {
    Validador.validarParametros([{ id }]);

    return await ProfessorRepository.obterPorId(id);
  }

  async obter(filtro: FilterQuery<Professor> = {}): Promise<Professor> {
    try{
      return await ProfessorRepository.obter(filtro);
    } catch (err){
      console.log('error, not found')
    }
  }

  // #pegabandeira
  async listar(filtro: FilterQuery<Professor> = {}): Promise<Professor[]> {
    try{
      return await ProfessorRepository.listar(filtro);
    }catch(err){
      console.log('error, not found')
    }
  }

  // #pegabandeira
  async incluir(professor: Professor) {
    const { nome, email, senha } = professor;

    Validador.validarParametros([{ nome }, { email }, { senha }]);
    professor.tipo = 1;
    
    try{  
      const id = await ProfessorRepository.incluir(professor);
      
      return new Mensagem('Professor incluido com sucesso!', {
        id,
      });
    }catch(err){
      console.log('error, not found')
    }
  }

  async alterar(id: number, professor: Professor) {
    const { nome, email, senha } = professor;

    Validador.validarParametros([{ id }, { nome }, { email }, { senha }]);

    await ProfessorRepository.alterar({ id }, professor);

    return new Mensagem('Professor alterado com sucesso!', {
      id,
    });
  }

  async excluir(id: number) {
    Validador.validarParametros([{ id }]);

    await ProfessorRepository.excluir({ id });

    return new Mensagem('Professor excluido com sucesso!', {
      id,
    });
  }
}
