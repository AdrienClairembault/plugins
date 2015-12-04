<?php

/* authorship_claim.html */
class __TwigTemplate_e317e629e4a784705f1568fc6a9aaa5d5a10301b37bc8f2174db00281287fe83 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("layout.html", "authorship_claim.html", 1);
        $this->blocks = array(
            'message' => array($this, 'block_message'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "layout.html";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_message($context, array $blocks = array())
    {
        // line 4
        echo "<p>
   Dear GLPI Plugins admin team :
</p>
<p>
   An user of the website claimed an authorship on GLPi Plugins.
</p>
   He is user #";
        // line 10
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["user"]) ? $context["user"] : null), "id", array()), "html", null, true);
        echo " (known as ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["user"]) ? $context["user"] : null), "username", array()), "html", null, true);
        echo ") in the database,<br /> and claims being author #";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["author"]) ? $context["author"] : null), "id", array()), "html", null, true);
        echo " (known as ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["author"]) ? $context["author"] : null), "name", array()), "html", null, true);
        echo ").
</p>
<p>
   The user.author_id column need to be set in MySQL, type :
</p>
<p>
   UPDATE user set author_id = ";
        // line 16
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["author"]) ? $context["author"] : null), "id", array()), "html", null, true);
        echo " where id = ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["user"]) ? $context["user"] : null), "id", array()), "html", null, true);
        echo ";
</p>
";
    }

    public function getTemplateName()
    {
        return "authorship_claim.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  54 => 16,  39 => 10,  31 => 4,  28 => 3,  11 => 1,);
    }
}
/* {% extends "layout.html" %}*/
/* */
/* {% block message %}*/
/* <p>*/
/*    Dear GLPI Plugins admin team :*/
/* </p>*/
/* <p>*/
/*    An user of the website claimed an authorship on GLPi Plugins.*/
/* </p>*/
/*    He is user #{{user.id}} (known as {{user.username}}) in the database,<br /> and claims being author #{{author.id}} (known as {{author.name}}).*/
/* </p>*/
/* <p>*/
/*    The user.author_id column need to be set in MySQL, type :*/
/* </p>*/
/* <p>*/
/*    UPDATE user set author_id = {{author.id}} where id = {{user.id}};*/
/* </p>*/
/* {% endblock %}*/
