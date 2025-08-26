"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronRight, Check, Star, Users, Clock, MapPin, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navigation from "@/components/Navigation"

export default function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Proposta enviada com sucesso!")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="inicio"
        className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-800 text-white flex items-center"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Proposta de Consultoria
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Melhoria de Processos no Chão de Fábrica
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              NEOATO
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Organização, controle e eficiência para almoxarifado, produção, compras e planejamento.
            </p>
            <Button
              onClick={() => scrollToSection("resumo")}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Ver Proposta Completa
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Resumo Section */}
      <section id="resumo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Resumo da Proposta</h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Esta proposta tem como objetivo estruturar e aprimorar os processos de almoxarifado, produção, compras
                  e planejamento, por meio da organização física e sistêmica no Omie.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  O trabalho será desenvolvido em duas frentes principais:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-blue-600">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Ajuste físico x sistêmico</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Realização de inventário geral, criação de estoques separados e alinhamento entre operação
                        física e sistema.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-blue-600">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Padronização de processos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Análise dos fluxos atuais, definição de procedimentos, controles e instruções de trabalho para
                        cada setor envolvido.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mt-6 font-semibold">
                  O resultado esperado é maior organização, controle e eficiência operacional, reduzindo falhas e
                  garantindo informações confiáveis para tomada de decisão.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Escopo Detalhado Section */}
      <section id="escopo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Escopo Detalhado</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="recebimento" className="border rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-blue-50">
                  <span className="text-xl font-semibold text-blue-800">Recebimento</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Identificação completa das matérias-primas recebidas (código, descrição, quantidade, nota fiscal e
                      localização no estoque).
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Necessidade de impressora e etiquetas para padronização de identificação.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Desenvolvimento de planilha para controle de recebimentos.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Implementação de processo de registro e tratativa de divergências e avarias.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="estoque" className="border rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-blue-50">
                  <span className="text-xl font-semibold text-blue-800">Estoque</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Criação e padronização de locais de estoque físico e fiscal.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Execução de inventário geral e implantação de controle de inventário cíclico.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Estruturação do controle de separação de ordens.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Definição de processo para remessas de envio.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Implementação de controle específico para materiais consumíveis.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="expedicao" className="border rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-blue-50">
                  <span className="text-xl font-semibold text-blue-800">Expedição</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Estruturação de estoque de expedição no Omie, permitindo visibilidade para a área comercial.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Criação de procedimento de expedição com controles definidos.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="compras" className="border rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-blue-50">
                  <span className="text-xl font-semibold text-blue-800">Compras</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Padronização de procedimentos de compras.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Implementação de controle de cotações.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Criação de fluxo de pedidos de compra dentro do sistema Omie.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="planejamento" className="border rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-blue-50">
                  <span className="text-xl font-semibold text-blue-800">Planejamento</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Desenvolvimento de controles para planejamento de produção e expedição.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Criação de procedimentos e instruções de trabalho para a área de planejamento.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="producao" className="border rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-blue-50">
                  <span className="text-xl font-semibold text-blue-800">Produção</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Estruturação de procedimentos e instruções de trabalho para produção.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Organização dos processos produtivos por etapas.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Criação de método de identificação de produtos acabados.
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      Designação e controle de materiais destinados a reparo físico e sistêmico.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Planos de Mentoria</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Escolha o pacote ideal para transformar sua empresa com nossa mentoria especializada em gestão e
                processos empresariais.
              </p>
              <p className="text-3xl md:text-2xl font-bold mb-6 text-gray-800">
                Todos planos tem previsão de entrega de resultados em até 3 meses.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Pacote Simples */}
              <Card className="relative shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">Pacote Simples</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">R$ 1.120</span>
                    <p className="text-gray-600 mt-2">40 horas • R$ 28/hora</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">1 reunião de 1 horas por semana</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">1 visita inicial no primeiro sábado (4h)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Suporte via WhatsApp</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Análise inicial de processos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Relatório de recomendações</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => scrollToSection("contato")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  >
                    Escolher Plano
                  </Button>
                </CardContent>
              </Card>

              {/* Pacote Premium */}
              <Card className="relative shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-500 transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">Pacote Premium</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">R$ 1.920</span>
                    <p className="text-gray-600 mt-2">80 horas • R$ 24/hora</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">2 reuniões de 1 horas por semana</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Suporte via WhatsApp</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">1 visita presencial por semana (2h)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">1 visita inicial no primeiro sábado (4h)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">1 visita antes da auditoria de validação no sábado (4h)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">1 auditoria para validação de processos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Implementação de melhorias</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => scrollToSection("contato")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  >
                    Escolher Plano
                  </Button>
                </CardContent>
              </Card>

              {/* Pacote Master */}
              <Card className="relative shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">Pacote Master</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">R$ 2.520</span>
                    <p className="text-gray-600 mt-2">120 horas • R$ 21/hora</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">3 reuniões de 1 horas por semana</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Suporte via WhatsApp</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">2 visitas presenciais por semana</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">3 visitas em sábados diferentes (4h) durante mentoria</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">1 visita inicial no primeiro sábado (4h)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">1 visita antes da auditoria final no sábado (4h)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">1 auditoria final completa</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Transformação completa de processos</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => scrollToSection("contato")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  >
                    Escolher Plano
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Diferenciais */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Por que escolher nossa mentoria?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Resultados Rápidos</h4>
                  <p className="text-gray-600">
                    Implementação prática com resultados visíveis desde as primeiras semanas.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Acompanhamento Presencial</h4>
                  <p className="text-gray-600">Visitas in-loco para implementação direta no chão de fábrica.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Expertise Comprovada</h4>
                  <p className="text-gray-600">Anos de experiência em otimização de processos industriais.</p>
                </div>
              </div>
            </div>

            {/* Depoimentos */}
            {/* <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">O que nossos clientes dizem</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "A consultoria da NEOATO transformou completamente nossos processos. Reduzimos 40% do tempo de
                      produção e eliminamos praticamente todos os erros de estoque."
                    </p>
                    <div className="font-semibold text-gray-800">Carlos Silva - Diretor Industrial</div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "O acompanhamento presencial fez toda a diferença. A equipe realmente entende as necessidades do
                      chão de fábrica e implementa soluções práticas."
                    </p>
                    <div className="font-semibold text-gray-800">Ana Costa - Gerente de Operações</div>
                  </CardContent>
                </Card>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      {/* <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">Entre em Contato</h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Entre em contato para mais informações ou para agendar uma reunião sobre esta proposta.
            </p>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome *
                      </label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Deixe sua mensagem ou dúvidas sobre a proposta..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    Enviar Proposta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      {/* Contato Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
              Entre em Contato
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Entre em contato para mais informações ou para agendar uma reunião sobre esta proposta.
            </p>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form
                  action="https://formsubmit.co/kenedychagas881@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Desativa captcha e envia para página customizada (opcional) */}
                  <input type="hidden" name="_captcha" value="false" />
                  {/* <input type="hidden" name="_next" value="https://seusite.com/obrigado" /> */}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nome *
                      </label>
                      <Input
                        id="nome"
                        name="name" // Formsubmit usa "name"
                        type="text"
                        required
                        className="w-full"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      name="phone"
                      type="tel"
                      className="w-full"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      name="message"
                      rows={4}
                      className="w-full"
                      placeholder="Deixe sua mensagem ou dúvidas sobre a proposta..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    Enviar Proposta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg mb-4">© 2025 KCHAGAS Consultoria – Todos os direitos reservados.</p>

            {/* Linha 1 */}
            <div className="flex justify-center space-x-6 text-sm mb-2">
              <button onClick={() => scrollToSection("inicio")} className="hover:text-blue-300 transition-colors">
                Início
              </button>
              <span>|</span>
              <button onClick={() => scrollToSection("resumo")} className="hover:text-blue-300 transition-colors">
                Resumo
              </button>
              <span>|</span>
              <button onClick={() => scrollToSection("escopo")} className="hover:text-blue-300 transition-colors">
                Escopo
              </button>
            </div>

            {/* Linha 2 */}
            <div className="flex justify-center space-x-6 text-sm">
              <button onClick={() => scrollToSection("planos")} className="hover:text-blue-300 transition-colors">
                Planos
              </button>
              <span>|</span>
              <button onClick={() => scrollToSection("contato")} className="hover:text-blue-300 transition-colors">
                Contato
              </button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
