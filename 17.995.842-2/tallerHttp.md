Taller 1 HTTP

1. Glosario

  - Request: Es un mensaje de petición de http emitido por el cliente hacia el servidor, la cual incluye el método de petición, seguido 
  de la URL y la versión de http para el cliente.
  - Response: Mensaje emitido por el servidor en respuesta a la petición de un cliente, iniciado por la *Status-Line*, que entrega
  la versión del protocolo http, el código de estado de la petición y el mensaje de respuesta.
  - Status-Codes: Es un elemento de la respuesta http, es un entero de 3 dígitos donde el primer dígito define la clase de la respuesta
  y los últimos 2 dígitos no cumplen ningún rol de categorización. El primer dígito define 5 tipos de clases: informacional, éxito, 
  redirección, error del cliente, error del servidor.
  - Methods: GET, POST, HEAD, OPTIONS, PUT, DELETE.
    - GET: Es el método usado para recuperar información del servidor consultado en la URL, éste método solo obtiene información y no 
    debería tener ningún otro efecto en los datos.
    - POST: Es un método para la petición de enviar datos al servidor, usando formas html.
    - HEAD: Es como el método *HEAD*, pero solo transfiere la *Status-Line* y el *Header*.
    - OPTIONS: Es un método que describe las opciones de comunicación con el recurso objetivo.
    - PUT: Método que reemplaza todas las representaciones del recurso objetivo con el contenido enviado.
    - DELETE: Elimina todas las representaciones del recurso objetivo, dada una URL.
  - Header: El campo header de una petición http, provee información requerida por la petición, respuesta o sobre el objeto enviado en el
  cuerpo del mensaje.
  - Accept: La cabecera de petición *Accept*, puede ser usado para especificar ciertos tipos de medios, compatibles con la respuesta.
  También permite el listado de múltiples tipos de medios.
  - Accept-Charset: Éste campo puede ser usado para indicar qué set de caractéres son aceptables para la respuesta, También permite el listado de múltiples set de caractéres.
  - Accept-Encoding: Es un campo de petición similar al *Accept*, pero restringe el codificado de contenidos aceptable en la
  respuesta.
  - Cache-Control: Es un campo de cabecera general usado para especificar directivas que **deben** ser obedecidas por todo el sistema de caché. Un cliente o servidor puedde usar este *Header* para especificar parámetros el caché o para pedir ciertos tipos de documentos desde el caché, para ello, ocupa una serie de directivas como *no-cache*, *no-store*, *only-if-cached*, etc.
  - Connection: Este campo de cabecera general permite al emisor especificar opciones deseadas para aquella conección en particular  no deben ser comunicados por proxies o replicadas en otras conecciones.
  - Cookie: El valor del campo *cookie* de la cabecera de petición contiene información en forma de pares de valores del tipo nombre/valor guardados para cierta URL.
  - Set-Cookie: El campo *set-cookie* contiene un par nombre/valor con información a mantener en la URL especificada. Éste campo incluye un token *set-cookie*, seguido de por una lista separada por comas con una o más *cookies*.
  - Host: Este campo  es usado para especificar el host de internet y el número de puerto del recurso requerido. Un *host* sin ninguna información sobre el puerto implica usar el puerto por defecto, que es el 80.
  - Origin: La cabecera de petición *origin* indica de dónde proviene la operación de extraer. No incluye información sobre la dirección, solo el nombre del servidor. Es similar al *referer* pero no incluye la dirección completa al recurso pedido.
  - Referer: Este campo permite al cliente especificar la dirección del recurso solicitado desde la URL especificada.
  - User-Agent: El campo *user-agent* contiene información sobre el agente de usuario que origina la petición.
  - Content-Encoding: Campo usado como modificador del tipo de contenido a usar. Es una característica de la entiddad identificada por la dirección pedida. En caso de que el *content-encoding* no sea aceptable por el servidor de origen, éste debería responder con un código de estado 145, que se refiere a "tipo de contenido sin soporte".
  - Content-Length: Indica el tamaño del cuerpo de la entidad, en numeros decimales de octetos, enviados al receptor o, en el caso del método *head*, el tamaño del cuerpo que se hubiese sido enviado, en caso de que la petición haya sido un *get*.
  - Content-Type: Señala el tipo de contenido del cuerpo enviado al receptor o, en caso del método *head*, el tipo de contenido que se hubiese enviado si es que la petición hubiese sido un *get*.
  - Location: Se usa para redireccionar al receptor a un lugar diferente al especificado por la petición en la URL para completar.
  - Upgrade: Permite al cliente especificar qué protocolo de comunicación adicional soporta y preferiría usar si el servidor encuentra apropiado el cambiar protocolos. Se creo con la intención de proveer un mecanismo sencillo para la transición desde http/1.1 a algún otro protocolo incompatible.
  
2.  
