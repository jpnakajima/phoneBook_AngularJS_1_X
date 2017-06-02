angular.module("phoneBook",[]);
angular.module("phoneBook").controller("phoneBookCtrl", function($scope){
    $scope.app = "Phone Book";
    $scope.contatos = [
        {nome: "João", telefone: "99998888"},
        {nome: "Paulo", telefone: "99997777"},
        {nome: "Naka", telefone: "99996666"},
    ];
    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular"},
        {nome: "Vivo", codigo: 15, categoria: "Celular"},
        {nome: "Tim", codigo: 41, categoria: "Celular"},
        {nome: "GVT", codigo: 25, categoria: "Fixo"},
        {nome: "Embratel", codigo: 21, categoria: "Fixo"},
    ];
    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };
    $scope.apagarContatos = function(contatos){
         $scope.contatos = contatos.filter(function(contato){
            if(!contato.selecionado)
                return contato;
        });
        console.log(contatosSelecionados);
    }
});