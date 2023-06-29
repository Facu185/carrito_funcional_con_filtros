<?php
header('Cache-Control: max-age=360000, must-revalidate');
header('Expires: Mon, 26 Jul 2040 05:00:00 GMT');
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
include_once("conect.php");


try {

    function filtro($categoria)
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "producto";
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "SELECT * FROM productos WHERE categoria = :categoria";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':categoria', $categoria);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $results;
    }

    function condicion($condicion)
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "producto";
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "SELECT * FROM productos WHERE condicion = :condicion";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':condicion', $condicion);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $results;
    }

    function oferta()
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "producto";
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "SELECT * FROM productos WHERE oferta = '1'";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $results;
    }

    function todo()
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "producto";
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "SELECT * FROM productos";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $results;
    }

    $tipoServicio = trim($_GET["tipo"]);
    switch ($tipoServicio) {
        case 'ropa':
            echo json_encode(filtro('ropa'));
            break;
        case 'celulares':
            echo json_encode(filtro('celulares'));
            break;
        case 'comestibles':
            echo json_encode(filtro('comestibles'));
            break;
        case 'todo':
            echo json_encode(todo());
            break;
        case 'nuevo':
            echo json_encode(condicion('nuevo'));
            break;
        case 'usado':
            echo json_encode(condicion('usado'));
            break;
        case 'oferta':
            echo json_encode(oferta());
            break;
    }
} catch (PDOException $e) {
    echo "Error de consulta: " . $e->getMessage();
}

// Cerrar la conexión con la base de datos
$conn = null;
