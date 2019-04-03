Taller 1 HTTP

1. Glosario

  - Request: Es un mensaje de petición de http emitido por el cliente hacia el servidor, la cual incluye el método de petición, seguido 
  de la URL y la versión de http para el cliente.
  - Response: Mensaje emitido por el servidor en respuesta a la petición de un cliente, iniciado por la Status-Line, que entrega
  la versión del protocolo http, el código de estado de la petición y el mensaje de respuesta.
  - Status-Codes: Es un elemento de la respuesta http, es un entero de 3 dígitos donde el primer dígito define la clase de la respuesta
  y los últimos 2 dígitos no cumplen ningún rol de categorización. El primer dígito define 5 tipos de clases: informacional, éxito, 
  redirección, error del cliente, error del servidor.
  - Methods: GET, POST, HEAD, OPTIONS, PUT, DELETE.
    - GET: Es el método usado para recuperar información del servidor consultado en la URL, éste método solo obtiene información y no 
    debería tener ningún otro efecto en los datos.
    - POST: Es un método para la petición de enviar datos al servidor, usando formas html.
    - HEAD: Es como el método HEAD, pero solo transfiere la Status-Line y la cabecera.
    - OPTIONS: Es un método que describe las opciones de comunicación con el recurso objetivo.
    - PUT: Método que reemplaza todas las representaciones del recurso objetivo con el contenido enviado.
    - DELETE: Elimina todas las representaciones del recurso objetivo, dada una URL.
  - Header: El campo header de una petición http, provee información requerida por la petición, respuesta o sobre el objeto enviado en el
  cuerpo del mensaje.
  - Accept: La cabecera de petición Accept, puede ser usado para especificar ciertos tipos de medios, compatibles con la respuesta.
  También permite el listado de múltiples tipos de medios.
  - Accept-Charset: Éste campo puede ser usado para indicar qué set de caractéres son aceptables para la respuesta, También permite
  el listado de múltiples set de caractéres.
