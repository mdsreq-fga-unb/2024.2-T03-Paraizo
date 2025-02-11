# **Recursos**

??? abstract "Histórico de Revisão"

    | **Data** | **Versão** |        **Descrição**        |           **Autor**            |
    | :------: | :--------: | :-------------------------: | :----------------------------: |
    |  08/11   |    1.0     | Criação do tópico de Documentação | Maykon Júnio dos Santos Soares |

---

## **Prepando ambiente virtural**

### Requisitos

- Python 3.12.3 (Latest)
- pip 24.3.1

### **Instalando virtualenv**

<!--termynal: {title: bash, prompt_literal_start: [$]}-->

```
$ python -m pip install --user virtualenv
```

### **Criando ambiente virtual**

<!--termynal: {title: bash, prompt_literal_start: [$]}-->

```
$ virtualenv venv
```

### **Ativando ambiente virtual**

<!--termynal: {title: bash, prompt_literal_start: [$]}-->

```
$ source venv/Scripts/activate
```

### **Instalando pacotes**

<!--termynal: {title: bash, prompt_literal_start: [$]}-->

```
$ pip install -r requirements.txt
```

### **Iniciando localmente**

<!--termynal: {title: bash, prompt_literal_start: [$]}-->

```
$ mkdocs serve
```
