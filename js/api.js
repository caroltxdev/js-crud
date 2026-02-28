const URL_BASE = "http://localhost:3000";

const api = {

  async buscarPensamentos() {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos`);

      if (!response.ok) {
        throw new Error("Erro ao buscar pensamentos");
      }

      return await response.json();

    } catch (error) {
      console.error("Erro real:", error);
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pensamento)
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar pensamento");
      }

      return await response.json();

    } catch (error) {
      console.error("Erro real:", error);
      alert("Erro ao salvar pensamento");
      throw error;
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos/${id}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar pensamento por ID");
      }

      return await response.json();

    } catch (error) {
      console.error("Erro real:", error);
      alert("Erro ao buscar pensamento");
      throw error;
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pensamento)
      });

      if (!response.ok) {
        throw new Error("Erro ao editar pensamento");
      }

      return await response.json();

    } catch (error) {
      console.error("Erro real:", error);
      alert("Erro ao editar pensamento");
      throw error;
    }
  },

  async excluirPensamento(id) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir pensamento");
      }

    } catch (error) {
      console.error("Erro real:", error);
      alert("Erro ao excluir um pensamento");
      throw error;
    }
  }

};

export default api;